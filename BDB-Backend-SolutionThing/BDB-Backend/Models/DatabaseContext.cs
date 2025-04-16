using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;

namespace BDB_Backend.Models
{
    // defines our database connection so we can interface with the database
    public class DatabaseContext : DbContext
    {
        public DbSet<User> Users { get; set; } = null!;

        public DbSet<ItemListing> ItemListings { get; set; } = null!;

        public DbSet<Transaction> Transactions { get; set; } = null!;

        public DbSet<Item> Items { get; set; } = null!;

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasKey(x => x.UserID);
            modelBuilder.Entity<ItemListing>().HasKey(x => x.ListingID);
            modelBuilder.Entity<Transaction>().HasKey(x => x.TransactionID);
            modelBuilder.Entity<Item>().HasKey(x => x.ItemID);
            base.OnModelCreating(modelBuilder);
        }
    }
}
