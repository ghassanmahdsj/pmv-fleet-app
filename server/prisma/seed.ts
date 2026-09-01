// Seeds a small, realistic dataset covering every screen in the design
// spec: asset register, an in-flight asset request, VOR job cards (one
// overdue, one mid-repair), and a disposal case with three quotations.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function daysAgo(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

async function main() {
  await prisma.activityLogEntry.deleteMany();
  await prisma.disposalQuotation.deleteMany();
  await prisma.disposalCaseStep.deleteMany();
  await prisma.disposalCase.deleteMany();
  await prisma.jobCardPart.deleteMany();
  await prisma.jobCardStep.deleteMany();
  await prisma.jobCard.deleteMany();
  await prisma.assetRequestStep.deleteMany();
  await prisma.assetRequest.deleteMany();
  await prisma.asset.deleteMany();
  await prisma.user.deleteMany();
  await prisma.department.deleteMany();
  await prisma.site.deleteMany();

  const [siteOne, siteTwo] = await Promise.all([
    prisma.site.create({ data: { name: "Site 1 — Jeddah" } }),
    prisma.site.create({ data: { name: "Site 2 — Riyadh" } }),
  ]);

  const [workshop, supportServices, operations] = await Promise.all([
    prisma.department.create({ data: { name: "Workshop" } }),
    prisma.department.create({ data: { name: "Support services" } }),
    prisma.department.create({ data: { name: "Operations" } }),
  ]);

  const [technician, sectionHead, directorSupport, workshopManager, pmvManager] = await Promise.all([
    prisma.user.create({ data: { name: "Yousef Al-Harbi", email: "yousef.alharbi@mag.sa", department: "Workshop", role: "Workshop technician" } }),
    prisma.user.create({ data: { name: "Nora Al-Qahtani", email: "nora.alqahtani@mag.sa", department: "Operations", role: "Section head" } }),
    prisma.user.create({ data: { name: "Faisal Al-Dosari", email: "faisal.aldosari@mag.sa", department: "Support services", role: "Director, support services" } }),
    prisma.user.create({ data: { name: "Bandar Al-Otaibi", email: "bandar.alotaibi@mag.sa", department: "Workshop", role: "Workshop manager" } }),
    prisma.user.create({ data: { name: "Huda Al-Shammari", email: "huda.alshammari@mag.sa", department: "Operations", role: "PMV manager" } }),
  ]);

  const activeAsset = await prisma.asset.create({
    data: {
      code: "PMV-0511",
      magIdTag: "MAG-511298",
      type: "Toyota Hilux pickup",
      siteId: siteOne.id,
      status: "active",
      lastServiceDate: daysAgo(40),
    },
  });

  const overdueVorAsset = await prisma.asset.create({
    data: {
      code: "PMV-0876",
      magIdTag: "MAG-876114",
      type: "Toyota Land Cruiser",
      siteId: siteTwo.id,
      status: "vor",
      lastServiceDate: daysAgo(120),
    },
  });

  const midRepairAsset = await prisma.asset.create({
    data: {
      code: "PMV-1042",
      magIdTag: "MAG-104233",
      type: "Isuzu flatbed truck",
      siteId: siteOne.id,
      status: "vor",
      lastServiceDate: daysAgo(200),
    },
  });

  const disposalAsset = await prisma.asset.create({
    data: {
      code: "PMV-0233",
      magIdTag: "MAG-023377",
      type: "GMC Sierra pickup",
      siteId: siteTwo.id,
      status: "disposal_pending",
      lastServiceDate: daysAgo(300),
    },
  });

  const assetRequest = await prisma.assetRequest.create({
    data: {
      code: "AR-0142",
      assetType: "Toyota Hilux pickup",
      departmentId: operations.id,
      justification: "Additional site vehicle needed to cover the new Riyadh route expansion.",
      estimatedCostSar: "138000.00",
      status: "in_review",
      currentStage: "Director support approval",
      raisedById: sectionHead.id,
      raisedAt: daysAgo(3),
      steps: {
        create: [
          { stepOrder: 1, name: "Section head approval", status: "done", actedById: sectionHead.id, actedAt: daysAgo(3) },
          { stepOrder: 2, name: "Director support approval", status: "current" },
          { stepOrder: 3, name: "Committee selects vendor", status: "pending" },
          { stepOrder: 4, name: "Purchase order issued", status: "pending" },
        ],
      },
    },
  });

  const overdueJobCard = await prisma.jobCard.create({
    data: {
      code: "JC-0231",
      assetId: overdueVorAsset.id,
      faultDescription: "Transmission fault detected during routine inspection; vehicle cannot be safely driven.",
      status: "awaiting_parts",
      currentStage: "Awaiting parts",
      purchaseRequisitionRef: "PR-0087",
      urgency: "High",
      openedById: workshopManager.id,
      openedAt: daysAgo(9),
      vorStartedAt: daysAgo(9),
      parts: {
        create: [
          { name: "Transmission assembly", status: "ordered", etaDate: daysAgo(-3) },
          { name: "Transmission fluid kit", status: "in_stock_released" },
        ],
      },
      steps: {
        create: [
          { stepOrder: 1, name: "Pre-inspection", status: "done", actedById: technician.id, actedAt: daysAgo(9) },
          { stepOrder: 2, name: "Job card opened", status: "done", actedById: workshopManager.id, actedAt: daysAgo(9) },
          { stepOrder: 3, name: "Requisition raised", status: "done", actedById: workshopManager.id, actedAt: daysAgo(8) },
          { stepOrder: 4, name: "Awaiting parts", status: "current" },
          { stepOrder: 5, name: "Final inspection", status: "pending" },
          { stepOrder: 6, name: "VOR lifted", status: "pending" },
        ],
      },
    },
  });

  const midRepairJobCard = await prisma.jobCard.create({
    data: {
      code: "JC-0244",
      assetId: midRepairAsset.id,
      faultDescription: "Brake system failure reported by driver; vehicle towed to workshop.",
      status: "repair_in_progress",
      currentStage: "Final inspection",
      purchaseRequisitionRef: "PR-0091",
      urgency: "Medium",
      openedById: workshopManager.id,
      openedAt: daysAgo(4),
      vorStartedAt: daysAgo(4),
      parts: {
        create: [{ name: "Brake caliper set", status: "in_stock_released" }],
      },
      steps: {
        create: [
          { stepOrder: 1, name: "Pre-inspection", status: "done", actedById: technician.id, actedAt: daysAgo(4) },
          { stepOrder: 2, name: "Job card opened", status: "done", actedById: workshopManager.id, actedAt: daysAgo(4) },
          { stepOrder: 3, name: "Requisition raised", status: "done", actedById: workshopManager.id, actedAt: daysAgo(3) },
          { stepOrder: 4, name: "Awaiting parts", status: "done", actedById: workshopManager.id, actedAt: daysAgo(2) },
          { stepOrder: 5, name: "Final inspection", status: "current" },
          { stepOrder: 6, name: "VOR lifted", status: "pending" },
        ],
      },
    },
  });

  const disposalCase = await prisma.disposalCase.create({
    data: {
      code: "DS-0053",
      assetId: disposalAsset.id,
      initiatedById: pmvManager.id,
      initiatedAt: daysAgo(21),
      currentStage: "Committee decision",
      quotations: {
        create: [
          { vendorName: "Al Rashid Auto Trading", note: "Riyadh yard, pickup within 5 days", amountSar: "18500.00" },
          { vendorName: "Gulf Fleet Resale Co.", note: "Jeddah port, pickup within 10 days", amountSar: "21200.00", isRecommended: true },
          { vendorName: "National Vehicle Recyclers", note: "Riyadh yard, pickup within 3 days", amountSar: "19750.00" },
        ],
      },
      steps: {
        create: [
          { stepOrder: 1, name: "Workshop technical review", status: "done", actedById: workshopManager.id, actedAt: daysAgo(21) },
          { stepOrder: 2, name: "PMV manager recommendation", status: "done", actedById: pmvManager.id, actedAt: daysAgo(17) },
          { stepOrder: 3, name: "Group CEO consent", status: "done", actedAt: daysAgo(14) },
          { stepOrder: 4, name: "Parked & 3 quotes sourced", status: "done", actedAt: daysAgo(6) },
          { stepOrder: 5, name: "Committee decision", status: "current" },
          { stepOrder: 6, name: "Ownership transfer & write-off", status: "pending" },
        ],
      },
    },
  });

  await prisma.activityLogEntry.createMany({
    data: [
      { message: `${overdueVorAsset.code} marked VOR at ${siteTwo.name}`, assetId: overdueVorAsset.id, jobCardId: overdueJobCard.id, occurredAt: daysAgo(9) },
      { message: `${assetRequest.code} approved by section head`, assetRequestId: assetRequest.id, occurredAt: daysAgo(3) },
      { message: `${midRepairJobCard.code} moved to final inspection`, jobCardId: midRepairJobCard.id, occurredAt: daysAgo(1) },
      { message: `${disposalCase.code} received 3rd quotation from National Vehicle Recyclers`, disposalCaseId: disposalCase.id, occurredAt: daysAgo(6) },
    ],
  });

  console.log("Seed complete:", {
    sites: [siteOne.name, siteTwo.name],
    departments: [workshop.name, supportServices.name, operations.name],
    assets: [activeAsset.code, overdueVorAsset.code, midRepairAsset.code, disposalAsset.code],
    assetRequest: assetRequest.code,
    jobCards: [overdueJobCard.code, midRepairJobCard.code],
    disposalCase: disposalCase.code,
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
