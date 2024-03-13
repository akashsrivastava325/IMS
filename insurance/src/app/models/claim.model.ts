export interface Claim {
  id: number;
  policyId: number;
  incidentDate: Date;
  description: string;
  type: string;
  document: string;
  status: string;
  userId: number;
  message: string;
  policy: any; // Assuming this is an object representing the policy data
  user: any; // Assuming this is an object representing the user data
}
