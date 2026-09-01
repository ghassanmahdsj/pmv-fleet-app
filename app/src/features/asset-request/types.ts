export interface NewAssetRequestFormData {
  assetType: string;
  department: string;
  justification: string;
  estimatedCostSar: string;
  requiredBy: string;
}

export type AssetRequestStatus = "draft" | "in_review" | "approved" | "rejected";

export interface AssetRequestSummary {
  id: string;
  status: AssetRequestStatus;
  raisedBy: string;
  raisedOn: string;
}
