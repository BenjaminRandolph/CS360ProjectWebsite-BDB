namespace BDB_Backend.Models
{
    public class UserAccount
    {
        public int id { get; set; }

        public string? userName { get; set; }

        public string? userPassword { get; set; }

        public string? phoneNumber { get; set; }

        public string? email { get; set; }
    }
}
