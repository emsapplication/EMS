using System;

namespace EMS.BusinessObjects
{
    public class AccountDetailBO : BaseBO
    {

        public int AccountDetailId { get; set; }

        public string AccountName { get; set; }

        public DateTime StartDate { get; set; }

        public int StatusId { get; set; }

        public DateTime EndDate { get; set; }

        public int VerticalId { get; set; }

        public int Director { get; set; }

        public int SDM { get; set; }

        public int PM { get; set; }

       
    }
}
