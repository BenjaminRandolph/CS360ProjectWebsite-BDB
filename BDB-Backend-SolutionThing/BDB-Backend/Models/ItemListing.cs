namespace BDB_Backend.Models
{
    // The model for an item listing
    // This is how we access the data in the database about the items currently listed or previously listed on the website
    public class ItemListing
    {
        public int id { get; set; }

        public int postedUserID { get; set; }

        public string? listingName { get; set; }

        public string? listingDescription { get; set; }

        public string? listingValue { get; set; }

        public int amountOfItem { get; set; }

        public bool inTransaction { get; set; }

        public bool completedExchange { get; set; }

        public long? hashCode { get; set; }
    }
}
