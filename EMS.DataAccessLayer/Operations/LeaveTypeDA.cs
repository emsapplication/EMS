using EMS.DataAccessLayer.ServiceContract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EMS.BusinessObjects;
using EMSEntity = EMS.DataAccessLayer.DataEntityModel;

namespace EMS.DataAccessLayer.Operations
{
    public class LeaveTypeDA : ILeaveTypeDA
    {
        public int AddLeaveType(LeaveTypeBO obj)
        {
            throw new NotImplementedException();
        }

        public int DeleteLeaveType(int leaveTypeid)
        {
            throw new NotImplementedException();
        }

        public List<LeaveTypeBO> GetAllLeaveType()
        {
            throw new NotImplementedException();
        }

        public LeaveTypeBO GetLeaveTypeById(int leaveTypeid)
        {
            throw new NotImplementedException();
        }

        public int UpdateLeaveType(LeaveTypeBO obj)
        {
            throw new NotImplementedException();
        }
    }
}
