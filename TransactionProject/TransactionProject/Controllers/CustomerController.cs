using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TransactionProject.Model;

namespace TransactionProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly TransactionDbContext atmdbcontext;
        public CustomerController(TransactionDbContext _atmDbContext)
        {
            atmdbcontext = _atmDbContext;
        }
        [HttpGet]
        public IEnumerable<CustomerDetails> GetCustomerDetails()
        {
            return atmdbcontext.customerDetails.ToList();//select * from CustomerDetails
        }

        [HttpGet("GetAccountNumber")]
        public CustomerDetails GetAccountNumber(long AccountNumber)
        {
            return atmdbcontext.customerDetails.Find(AccountNumber);
        }
        [HttpPost("InsertCustomer")]
        public IActionResult InsertCustomer([FromBody] CustomerDetails customerDetails)
        {
            if (customerDetails.AccountNumber.ToString() != "")
            {
                atmdbcontext.customerDetails.Add(customerDetails);
                atmdbcontext.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpPut("UpdateCustomer")]
        public IActionResult UpdateCustomer([FromBody] CustomerDetails customerDetails)
        {
            if (customerDetails.AccountNumber.ToString() != "")
            {
                atmdbcontext.Entry(customerDetails).State = EntityState.Modified;
                atmdbcontext.SaveChanges();
                return Ok("Customer Details updated successfully!");
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpDelete("DeleteCustomer")]
        public IActionResult DeleteCustomer(long AccountNumber)
        {
            var result = atmdbcontext.customerDetails.Find(AccountNumber);
            if (result != null)
            {
                atmdbcontext.customerDetails.Remove(result);
                atmdbcontext.SaveChanges();
                return Ok("Deleted Successfully");
            }
            else
            {
                return NotFound("Invalid Account number");
            }

        }
    }
}
