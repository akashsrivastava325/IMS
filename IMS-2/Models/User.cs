using System;
using System.Collections.Generic;

namespace IMS_2.Models
{
    public partial class User
    {
        public User()
        {
            Claims = new HashSet<Claim>();
            InsuranceForms = new HashSet<InsuranceForm>();
        }

        public int? Id { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string? FirstName { get; set; } = null!;
        public string? LastName { get; set; } = null!;
        public string? Email { get; set; } = null!;
        public string? Token { get; set; }
        public string? Role { get; set; }

        public virtual ICollection<Claim>? Claims { get; set; }
        public virtual ICollection<InsuranceForm>? InsuranceForms { get; set; }
    }
}
