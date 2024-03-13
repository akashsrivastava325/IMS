using System;
using System.Collections.Generic;

namespace IMS_2.Models
{
    public partial class Policy
    {
        public Policy()
        {
            Claims = new HashSet<Claim>();
            InsuranceForms = new HashSet<InsuranceForm>();
        }

        public int Id { get; set; }
        public string? Name { get; set; } = null!;
        public string? VehicleType { get; set; } = null!;
        public decimal? BasePremiumRate { get; set; }
        public string? Status { get; set; } = null!;

        public virtual ICollection<Claim>? Claims { get; set; }
        public virtual ICollection<InsuranceForm>? InsuranceForms { get; set; }
    }
}
