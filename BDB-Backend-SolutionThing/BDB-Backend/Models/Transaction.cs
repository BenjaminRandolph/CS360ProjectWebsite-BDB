namespace BDB_Backend.Models
{
    //The model for transactions
    // we define what is in the database for transactions here
    public class Transaction
    {
        public int TransactionID { get; set; }

        public int Item1 { get; set; }

        public int Item2 { get; set; }

        public int Party1 { get; set; }

        public int Party1Partner { get; set; }

        public int Party2 { get; set; }

        public int Party2Partner { get; set; }

        public bool Started { get; set; }

        public bool Ended { get; set; }

        public string? HashKey { get; set; }

        public int CollectedFunds { get; set; }
    }
}
