using System;

namespace EMS.BusinessObjects
{
    public class VacationDetailsBO : BaseBO
    {

        public int VacationDetailId { get; set; }

        public int ResourceDetailId { get; set; }

        public DateTime VacationDate { get; set; }

        public int LeaveTypeId { get; set; }

        public bool IsPlanned { get; set; }

        public bool IsBillable { get; set; }

        public bool IsApproved { get; set; }

        public int Approvedby { get; set; }

        public DateTime ApprovedOn { get; set; }

        public string Reason { get; set; }

        public int Status { get; set; }

    }
}
