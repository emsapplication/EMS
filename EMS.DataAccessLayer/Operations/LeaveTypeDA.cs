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
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.LeaveType oData = new EMSEntity.LeaveType();
                oData.LeaveType1 = obj.LeaveType;
                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.LeaveTypes.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteLeaveType(int leaveTypeid)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.LeaveTypes.First(i => i.LeaveTypeId == leaveTypeid);
                objEF.LeaveTypes.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<LeaveTypeBO> GetAllLeaveType()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.LeaveTypes
                        select new LeaveTypeBO
                        {
                            LeaveTypeId = oLoc.LeaveTypeId,
                            LeaveType = oLoc.LeaveType1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList();
            }
        }

        public LeaveTypeBO GetLeaveTypeById(int leaveTypeid)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.LeaveTypes
                        where oLoc.LeaveTypeId == leaveTypeid
                        select new LeaveTypeBO
                        {
                            LeaveTypeId = oLoc.LeaveTypeId,
                            LeaveType = oLoc.LeaveType1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdateLeaveType(LeaveTypeBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.LeaveTypes.First(i => i.LeaveTypeId == obj.LeaveTypeId);

                oData.LeaveType1 = obj.LeaveType;

                return objEF.SaveChanges();
            }
        }
    }
}
