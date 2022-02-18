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
    public class TransactionController : ControllerBase
    {
        private readonly TransactionDbContext trandbcontext;
        public TransactionController(TransactionDbContext _tranDbContext)
        {
            trandbcontext = _tranDbContext;
        }
        [HttpGet("GetAccountNumber")]
        public IEnumerable<TransactionDetails> GetAccountNumber(long accountNumber)
        {
            var list = from g in trandbcontext.transactionDetails where g.AccountNumber == accountNumber select g;
            return list;
        }
    }
}
