using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface ILeaveTypeDA
    {

        int AddLeaveType(LeaveTypeBO obj);

        int UpdateLeaveType(LeaveTypeBO obj);

        int DeleteLeaveType(int leaveTypeid);

        List<LeaveTypeBO> GetAllLeaveType();

        LeaveTypeBO GetLeaveTypeById(int leaveTypeid);

    }
}
