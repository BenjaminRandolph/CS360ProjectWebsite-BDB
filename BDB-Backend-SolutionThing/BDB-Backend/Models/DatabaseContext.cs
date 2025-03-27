using Microsoft.EntityFrameworkCore;
using BDB_Backend.Models;

namespace BDB_Backend.Models
{
    // defines our database connection so we can interface with the database
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        public DbSet<UserAccount> userAccounts { get; set; } = null!;

        public DbSet<BDB_Backend.Models.ItemListing> ItemListing { get; set; } = default!;
    }
}
