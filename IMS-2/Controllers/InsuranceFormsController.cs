using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IMS_2.Models;
using Microsoft.AspNetCore.JsonPatch;

namespace IMS_2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsuranceFormsController : ControllerBase
    {
        private readonly IMS2Context _context;

        public InsuranceFormsController(IMS2Context context)
        {
            _context = context;
        }

        // GET: api/InsuranceForms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InsuranceForm>>> GetInsuranceForms()
        {
          if (_context.InsuranceForms == null)
          {
              return NotFound();
          }
            return await _context.InsuranceForms.ToListAsync();
        }

        // GET: api/InsuranceForms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InsuranceForm>> GetInsuranceForm(int id)
        {
          if (_context.InsuranceForms == null)
          {
              return NotFound();
          }
            var insuranceForm = await _context.InsuranceForms.FindAsync(id);

            if (insuranceForm == null)
            {
                return NotFound();
            }

            return insuranceForm;
        }

        // PUT: api/InsuranceForms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInsuranceForm(int id, [FromBody] IDictionary<string, object> insuranceUpdateModel)
        {
            var existingInsurance = await _context.InsuranceForms.FindAsync(id);
            if (existingInsurance == null)
            {
                return NotFound();
            }

            // Update only the fields provided in the request body
            foreach (var kvp in insuranceUpdateModel)
            {
                if (kvp.Key.Equals("status", StringComparison.OrdinalIgnoreCase)) // Case-insensitive check for "status" property
                {
                    existingInsurance.Status = kvp.Value?.ToString(); // Set the status directly, assuming it's a string property
                }
                else
                {
                    // Assuming other properties are not updated in this action
                    // If there are other properties to update, you can handle them similarly
                }
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InsuranceFormExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }






        // POST: api/InsuranceForms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InsuranceForm>> PostInsuranceForm(InsuranceForm insuranceForm)
        {
          if (_context.InsuranceForms == null)
          {
              return Problem("Entity set 'IMS2Context.InsuranceForms'  is null.");
          }
            _context.InsuranceForms.Add(insuranceForm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInsuranceForm", new { id = insuranceForm.Id }, insuranceForm);
        }

        // DELETE: api/InsuranceForms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInsuranceForm(int id)
        {
            if (_context.InsuranceForms == null)
            {
                return NotFound();
            }
            var insuranceForm = await _context.InsuranceForms.FindAsync(id);
            if (insuranceForm == null)
            {
                return NotFound();
            }

            _context.InsuranceForms.Remove(insuranceForm);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InsuranceFormExists(int id)
        {
            return (_context.InsuranceForms?.Any(e => e.Id == id)).GetValueOrDefault();
        }



        [HttpGet("WithPolicyData")]
        public async Task<ActionResult<IEnumerable<object>>> GetInsuranceFormsWithPolicyData()
        {
            var insuranceForms = await _context.InsuranceForms.ToListAsync();
            var insuranceFormsWithPolicyData = new List<object>();

            foreach (var insuranceForm in insuranceForms)
            {
                // Fetch policy data based on the insurance form's PolicyId
                var policy = await _context.Policies.FindAsync(insuranceForm.PolicyId);

                // Fetch user name based on the insurance form's UserId
                var user = await _context.Users.FindAsync(insuranceForm.UserId);

                // Create an anonymous object to hold the insurance form data along with policy name, rate, and user name
                var insuranceFormDataWithPolicyData = new
                {
                    insuranceForm.Id,
                    insuranceForm.UserId,
                    insuranceForm.Make,
                    insuranceForm.Model,
                    insuranceForm.CylinderCapacity,
                    insuranceForm.KW,
                    insuranceForm.DateOfManufacture,
                    insuranceForm.NumberOfSeats,
                    insuranceForm.RightHandDrive,
                    insuranceForm.NumberOfSeatsMotorcycle,
                    insuranceForm.FuelType,
                    insuranceForm.Payload,
                    insuranceForm.TotalWeight,
                    insuranceForm.ListPrice,
                    insuranceForm.LicensePlateNumber,
                    insuranceForm.AnnualMileage,
                    insuranceForm.FirstName,
                    insuranceForm.LastName,
                    insuranceForm.DateOfBirth,
                    insuranceForm.Gender,
                    insuranceForm.StreetAddress,
                    insuranceForm.Country,
                    insuranceForm.ZipCode,
                    insuranceForm.City,
                    insuranceForm.Occupation,
                    insuranceForm.Hobbies,
                    insuranceForm.Website,
                    insuranceForm.Picture,
                    insuranceForm.StartDate,
                    insuranceForm.InsuranceSum,
                    insuranceForm.MeritRating,
                    insuranceForm.DamageInsurance,
                    insuranceForm.OptionalProducts,
                    insuranceForm.CourtesyCar,
                    insuranceForm.PriceSum,
                    insuranceForm.SelectOption,
                    insuranceForm.QuoteType,
                    insuranceForm.Email,
                    insuranceForm.Phone,
                    insuranceForm.Comments,
                    insuranceForm.VehicleType,
                    insuranceForm.PolicyId,
                    insuranceForm.Status,
                    PolicyName = policy?.Name, // Include PolicyName if policy is not null
                    PolicyRate = policy?.BasePremiumRate, // Include PolicyRate if policy is not null
                    UserName = user?.Username // Include UserName if user is not null
                };

                insuranceFormsWithPolicyData.Add(insuranceFormDataWithPolicyData);
            }

            return insuranceFormsWithPolicyData;
        }
    }
}
