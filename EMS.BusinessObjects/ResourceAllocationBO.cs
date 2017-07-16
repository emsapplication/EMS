using System;

namespace EMS.BusinessObjects
{
    public class ResourceAllocationBO : BaseBO
    {
        public int ResourceAllocationId { get; set; }

        public int ResourceDetailId { get; set; }

        public int ProjectDetailId { get; set; }

        public int DesignationId { get; set; }

        public int ProjectRoleId { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public int StatusId { get; set; }

        public int HourPerDay { get; set; }

        public bool IsInShift { get; set; }

        public int ShiftDetailId { get; set; }

    }
}
