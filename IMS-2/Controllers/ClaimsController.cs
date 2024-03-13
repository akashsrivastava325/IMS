using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IMS_2.Models;

namespace IMS_2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClaimsController : ControllerBase
    {
        private readonly IMS2Context _context;

        public ClaimsController(IMS2Context context)
        {
            _context = context;
        }

        // GET: api/Claims

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Claim>>> GetClaims()
        {
          if (_context.Claims == null)
          {
              return NotFound();
          }
            return await _context.Claims.ToListAsync();
        }

        // GET: api/Claims/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Claim>> GetClaim(int id)
        {
          if (_context.Claims == null)
          {
              return NotFound();
          }
            var claim = await _context.Claims.FindAsync(id);

            if (claim == null)
            {
                return NotFound();
            }

            return claim;
        }

        // PUT: api/Claims/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClaim(int id, [FromBody] Claim claimUpdateModel)
        {
            var existingClaim = await _context.Claims.FindAsync(id);
            if (existingClaim == null)
            {
                return NotFound();
            }

            // Update only the fields provided in the request body
            if (claimUpdateModel.Status != null)
            {
                existingClaim.Status = claimUpdateModel.Status;
            }
            if (claimUpdateModel.Message != null)
            {
                existingClaim.Message = claimUpdateModel.Message;
            }

            // Update other fields as needed...

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClaimExists(id))
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


        // POST: api/Claims
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Claim>> PostClaim(Claim claim)
        {
          if (_context.Claims == null)
          {
              return Problem("Entity set 'IMS2Context.Claims'  is null.");
          }
            _context.Claims.Add(claim);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClaim", new { id = claim.Id }, claim);
        }

        // DELETE: api/Claims/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClaim(int id)
        {
            if (_context.Claims == null)
            {
                return NotFound();
            }
            var claim = await _context.Claims.FindAsync(id);
            if (claim == null)
            {
                return NotFound();
            }

            _context.Claims.Remove(claim);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClaimExists(int id)
        {
            return (_context.Claims?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        [HttpGet("GetPolicyNamesByUserId/{userId}")]
        public async Task<ActionResult<IEnumerable<string>>> GetPolicyNamesByUserId(int userId)
        {
            // Get insurance forms for the given userId
            var insuranceForms = await _context.InsuranceForms
                .Where(form => form.UserId == userId)
                .ToListAsync();

            if (insuranceForms == null || !insuranceForms.Any())
            {
                return NotFound("No insurance forms found for the given userId.");
            }

            // Extract unique policyIds from insurance forms
            var policyIds = insuranceForms.Select(form => form.PolicyId).Distinct();

            // Retrieve policy names for the policyIds
            var policyNames = await _context.Policies
                .Where(policy => policyIds.Contains(policy.Id))
                .Select(policy => policy.Name)
                .ToListAsync();

            return Ok(policyNames);
        }


        private async Task<string> GetPolicyName(int? policyId)
        {
            if (policyId.HasValue)
            {
                var policy = await _context.Policies.FindAsync(policyId.Value);
                return policy?.Name;
            }
            return null; // or some default value indicating no policy name
        }

        private async Task<string> GetUserName(int? userId)
        {
            if (userId.HasValue)
            {
                var user = await _context.Users.FindAsync(userId.Value);
                return user?.Username;
            }
            return null; // or some default value indicating no user name
        }


        [HttpGet("WithUserAndPolicy")]
        public async Task<ActionResult<IEnumerable<object>>> GetClaimsWithUserAndPolicy()
        {
            var claims = await _context.Claims
                .Include(c => c.Policy)
                .Include(c => c.User)
                .Select(claim => new
                {
                    Id = claim.Id,
                    PolicyId = claim.PolicyId,
                    IncidentDate = claim.IncidentDate,
                    Description = claim.Description,
                    Type = claim.Type,
                    Document = claim.Document,
                    Status = claim.Status,
                    UserId = claim.UserId,
                    Message = claim.Message,
                    PolicyName = claim.Policy != null ? claim.Policy.Name : null,
                    UserName = claim.User != null ? claim.User.Username : null
                })
                .ToListAsync();

            return Ok(claims);
        }





    }
}
