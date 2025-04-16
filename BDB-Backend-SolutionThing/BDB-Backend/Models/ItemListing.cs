namespace BDB_Backend.Models
{
    // The model for an item listing
    // This is how we access the data in the database about the items currently listed or previously listed on the website
    public class ItemListing
    {
        public int ListingID { get; set; }

        public int OwnerUserID { get; set; }

        public int PartnerUserID { get; set; }

        public int ItemWanted { get; set; }

        public int ItemWantedAmount { get; set; }

        public int ItemToGive { get; set; }

        public int ItemToGiveAmount { get; set; }

        public bool InTransaction { get; set; }
    }
}
