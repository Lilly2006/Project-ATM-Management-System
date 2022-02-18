using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TransactionProject.Model;

namespace TransactionProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminLonginController : ControllerBase
    {
        private readonly TransactionDbContext trandbcontext;
        public AdminLonginController(TransactionDbContext _tranDbContext)
        {
            trandbcontext = _tranDbContext;
        }
        [HttpGet("GetLoginCredential")]
        public IEnumerable<AdminLongin> GetLoginCredential()
        {
            return trandbcontext.adminLongin.ToList();
        }

        [HttpPost("InsertLoginCredential")]
        public IActionResult InsertLoginCredential([FromBody] AdminLongin adminLongin)
        {
            if (adminLongin.UserName.ToString() != "")
            {
                trandbcontext.adminLongin.Add(adminLongin);
                trandbcontext.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
