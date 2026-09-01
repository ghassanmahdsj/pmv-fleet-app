-- CreateEnum
CREATE TYPE "StepStatus" AS ENUM ('done', 'current', 'pending');

-- CreateEnum
CREATE TYPE "AssetStatus" AS ENUM ('active', 'vor', 'disposal_pending');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('draft', 'in_review', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "JobCardStatus" AS ENUM ('marked_vor', 'repair_in_progress', 'awaiting_parts', 'closed');

-- CreateEnum
CREATE TYPE "PartStatus" AS ENUM ('ordered', 'in_stock_released');

-- CreateTable
CREATE TABLE "departments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sites" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "sites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "department" TEXT,
    "role" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assets" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "magIdTag" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "siteId" INTEGER NOT NULL,
    "status" "AssetStatus" NOT NULL DEFAULT 'active',
    "lastServiceDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset_requests" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "assetType" TEXT NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "justification" TEXT NOT NULL,
    "estimatedCostSar" DECIMAL(12,2) NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'draft',
    "currentStage" TEXT,
    "raisedById" INTEGER NOT NULL,
    "raisedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "asset_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset_request_steps" (
    "id" SERIAL NOT NULL,
    "assetRequestId" INTEGER NOT NULL,
    "stepOrder" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" "StepStatus" NOT NULL DEFAULT 'pending',
    "actedById" INTEGER,
    "actedAt" TIMESTAMP(3),
    "note" TEXT,

    CONSTRAINT "asset_request_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_cards" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    "faultDescription" TEXT NOT NULL,
    "status" "JobCardStatus" NOT NULL DEFAULT 'marked_vor',
    "currentStage" TEXT,
    "purchaseRequisitionRef" TEXT,
    "urgency" TEXT,
    "openedById" INTEGER NOT NULL,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vorStartedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vorEndedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_card_parts" (
    "id" SERIAL NOT NULL,
    "jobCardId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" "PartStatus" NOT NULL DEFAULT 'ordered',
    "etaDate" TIMESTAMP(3),

    CONSTRAINT "job_card_parts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_card_steps" (
    "id" SERIAL NOT NULL,
    "jobCardId" INTEGER NOT NULL,
    "stepOrder" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" "StepStatus" NOT NULL DEFAULT 'pending',
    "actedById" INTEGER,
    "actedAt" TIMESTAMP(3),
    "note" TEXT,

    CONSTRAINT "job_card_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disposal_cases" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    "initiatedById" INTEGER NOT NULL,
    "initiatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentStage" TEXT,
    "committeeDecision" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "disposal_cases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disposal_quotations" (
    "id" SERIAL NOT NULL,
    "disposalCaseId" INTEGER NOT NULL,
    "vendorName" TEXT NOT NULL,
    "note" TEXT,
    "amountSar" DECIMAL(12,2) NOT NULL,
    "isRecommended" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "disposal_quotations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disposal_case_steps" (
    "id" SERIAL NOT NULL,
    "disposalCaseId" INTEGER NOT NULL,
    "stepOrder" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" "StepStatus" NOT NULL DEFAULT 'pending',
    "actedById" INTEGER,
    "actedAt" TIMESTAMP(3),
    "note" TEXT,

    CONSTRAINT "disposal_case_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_log_entries" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "assetId" INTEGER,
    "assetRequestId" INTEGER,
    "jobCardId" INTEGER,
    "disposalCaseId" INTEGER,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_log_entries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "departments_name_key" ON "departments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sites_name_key" ON "sites"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "assets_code_key" ON "assets"("code");

-- CreateIndex
CREATE UNIQUE INDEX "assets_magIdTag_key" ON "assets"("magIdTag");

-- CreateIndex
CREATE INDEX "assets_status_idx" ON "assets"("status");

-- CreateIndex
CREATE INDEX "assets_siteId_idx" ON "assets"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "asset_requests_code_key" ON "asset_requests"("code");

-- CreateIndex
CREATE INDEX "asset_requests_status_idx" ON "asset_requests"("status");

-- CreateIndex
CREATE INDEX "asset_requests_departmentId_idx" ON "asset_requests"("departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "asset_request_steps_assetRequestId_stepOrder_key" ON "asset_request_steps"("assetRequestId", "stepOrder");

-- CreateIndex
CREATE UNIQUE INDEX "job_cards_code_key" ON "job_cards"("code");

-- CreateIndex
CREATE INDEX "job_cards_status_idx" ON "job_cards"("status");

-- CreateIndex
CREATE INDEX "job_cards_assetId_idx" ON "job_cards"("assetId");

-- CreateIndex
CREATE UNIQUE INDEX "job_card_steps_jobCardId_stepOrder_key" ON "job_card_steps"("jobCardId", "stepOrder");

-- CreateIndex
CREATE UNIQUE INDEX "disposal_cases_code_key" ON "disposal_cases"("code");

-- CreateIndex
CREATE INDEX "disposal_cases_assetId_idx" ON "disposal_cases"("assetId");

-- CreateIndex
CREATE UNIQUE INDEX "disposal_case_steps_disposalCaseId_stepOrder_key" ON "disposal_case_steps"("disposalCaseId", "stepOrder");

-- CreateIndex
CREATE INDEX "activity_log_entries_occurredAt_idx" ON "activity_log_entries"("occurredAt");

-- AddForeignKey
ALTER TABLE "assets" ADD CONSTRAINT "assets_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "sites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_requests" ADD CONSTRAINT "asset_requests_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_requests" ADD CONSTRAINT "asset_requests_raisedById_fkey" FOREIGN KEY ("raisedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_request_steps" ADD CONSTRAINT "asset_request_steps_assetRequestId_fkey" FOREIGN KEY ("assetRequestId") REFERENCES "asset_requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_request_steps" ADD CONSTRAINT "asset_request_steps_actedById_fkey" FOREIGN KEY ("actedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_cards" ADD CONSTRAINT "job_cards_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_cards" ADD CONSTRAINT "job_cards_openedById_fkey" FOREIGN KEY ("openedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_card_parts" ADD CONSTRAINT "job_card_parts_jobCardId_fkey" FOREIGN KEY ("jobCardId") REFERENCES "job_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_card_steps" ADD CONSTRAINT "job_card_steps_jobCardId_fkey" FOREIGN KEY ("jobCardId") REFERENCES "job_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_card_steps" ADD CONSTRAINT "job_card_steps_actedById_fkey" FOREIGN KEY ("actedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disposal_cases" ADD CONSTRAINT "disposal_cases_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disposal_cases" ADD CONSTRAINT "disposal_cases_initiatedById_fkey" FOREIGN KEY ("initiatedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disposal_quotations" ADD CONSTRAINT "disposal_quotations_disposalCaseId_fkey" FOREIGN KEY ("disposalCaseId") REFERENCES "disposal_cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disposal_case_steps" ADD CONSTRAINT "disposal_case_steps_disposalCaseId_fkey" FOREIGN KEY ("disposalCaseId") REFERENCES "disposal_cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disposal_case_steps" ADD CONSTRAINT "disposal_case_steps_actedById_fkey" FOREIGN KEY ("actedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_log_entries" ADD CONSTRAINT "activity_log_entries_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_log_entries" ADD CONSTRAINT "activity_log_entries_assetRequestId_fkey" FOREIGN KEY ("assetRequestId") REFERENCES "asset_requests"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_log_entries" ADD CONSTRAINT "activity_log_entries_jobCardId_fkey" FOREIGN KEY ("jobCardId") REFERENCES "job_cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_log_entries" ADD CONSTRAINT "activity_log_entries_disposalCaseId_fkey" FOREIGN KEY ("disposalCaseId") REFERENCES "disposal_cases"("id") ON DELETE SET NULL ON UPDATE CASCADE;
