namespace BDB_Backend.Models
{
    //the model for items
    // this is how we tell asp.net how the database entry works
    public class Item
    {
        public int ItemID { get; set; }

        public string? Name { get; set; }

        public string? Description { get; set; }
    }
}
