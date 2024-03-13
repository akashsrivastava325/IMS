using System;
using System.Collections.Generic;

namespace IMS_2.Models
{
    public partial class Claim
    {
        public int Id { get; set; }
        public int? PolicyId { get; set; }
        public DateTime? IncidentDate { get; set; }
        public string? Description { get; set; }
        public string? Type { get; set; }
        public string? Document { get; set; }
        public string? Status { get; set; }
        public int? UserId { get; set; }
        public string? Message { get; set; }

        public virtual Policy? Policy { get; set; }
        public virtual User? User { get; set; }
    }
}
