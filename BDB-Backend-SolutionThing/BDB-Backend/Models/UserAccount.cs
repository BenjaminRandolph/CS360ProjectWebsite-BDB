namespace BDB_Backend.Models
{
    // The model for user accounts
    // This is how we access user accounts in the database for account permissions and data
    public class UserAccount
    {
        public int id { get; set; }

        public string? userName { get; set; }

        public string? userPassword { get; set; }

        public string? phoneNumber { get; set; }

        public string? address { get; set; }

        public string? email { get; set; }

        public bool adminPermissions { get; set; }
    }
}
