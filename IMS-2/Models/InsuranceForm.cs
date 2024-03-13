using System;
using System.Collections.Generic;

namespace IMS_2.Models
{
    public partial class InsuranceForm
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Make { get; set; } = null!;
        public string Model { get; set; } = null!;
        public int? CylinderCapacity { get; set; }
        public int? KW { get; set; }
        public DateTime DateOfManufacture { get; set; }
        public int? NumberOfSeats { get; set; }
        public string? RightHandDrive { get; set; }
        public int? NumberOfSeatsMotorcycle { get; set; }
        public string FuelType { get; set; } = null!;
        public int? Payload { get; set; }
        public int? TotalWeight { get; set; }
        public decimal ListPrice { get; set; }
        public string LicensePlateNumber { get; set; } = null!;
        public int? AnnualMileage { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; } = null!;
        public string StreetAddress { get; set; } = null!;
        public string Country { get; set; } = null!;
        public string ZipCode { get; set; } = null!;
        public string City { get; set; } = null!;
        public string Occupation { get; set; } = null!;
        public string? Hobbies { get; set; }
        public string? Website { get; set; }
        public string? Picture { get; set; }
        public DateTime StartDate { get; set; }
        public int? InsuranceSum { get; set; }
        public string MeritRating { get; set; } = null!;
        public string DamageInsurance { get; set; } = null!;
        public string OptionalProducts { get; set; } = null!;
        public string CourtesyCar { get; set; } = null!;
        public decimal PriceSum { get; set; }
        public string SelectOption { get; set; } = null!;
        public string QuoteType { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string? Comments { get; set; }
        public string VehicleType { get; set; } = null!;
        public int PolicyId { get; set; }
        public string Status { get; set; } = null!;

        public virtual Policy Policy { get; set; } = null!;
        public virtual User User { get; set; } = null!;
    }
}
