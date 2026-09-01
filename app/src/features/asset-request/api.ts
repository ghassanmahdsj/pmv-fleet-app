import type { NewAssetRequestFormData } from "./types";

/**
 * Stand-in for the future asset-request service (which will itself sit in
 * front of the Oracle Asset Management sync). Swap the bodies below for real
 * HTTP calls once that backend exists — callers only depend on this contract.
 */
export async function saveAssetRequestDraft(_data: NewAssetRequestFormData): Promise<{ savedAt: string }> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { savedAt: new Date().toISOString() };
}

export async function submitAssetRequest(_data: NewAssetRequestFormData): Promise<{ requestId: string }> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { requestId: "AR-0142" };
}
