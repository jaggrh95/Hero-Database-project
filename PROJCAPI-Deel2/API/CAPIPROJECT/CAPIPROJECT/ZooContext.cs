using CAPIPROJECT.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CAPIPROJECT
{
    public class ZooContext : DbContext
    {
        public ZooContext(DbContextOptions<ZooContext> options)
               : base(options)
        {

        }
        public DbSet<Dier> Dieren { get; set; }
        public DbSet<Kooi> Kooien { get; set; }

        public DbSet<User> Users { get; set; }

        
    }
}
