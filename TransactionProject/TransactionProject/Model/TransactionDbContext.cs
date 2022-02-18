using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TransactionProject.Model
{
    public class TransactionDbContext:DbContext
    {
        public TransactionDbContext(DbContextOptions<TransactionDbContext> options) : base(options)
        {

        }

        public DbSet<CustomerDetails> customerDetails { get; set; }
        public DbSet<TransactionDetails> transactionDetails { get; set; }
        public DbSet<AdminLongin> adminLongin { get; set; }
    }
}
