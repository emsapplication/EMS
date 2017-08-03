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
    public class VacationDetailsDA : IVacationDetailsDA
    {
        public int AddVacationDetails(VacationDetailsBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.VacationDetail oData = new EMSEntity.VacationDetail();
                oData.ResourceDetailId = obj.ResourceDetailId;
                oData.VacationDate = obj.VacationDate;
                oData.LeaveTypeId = obj.LeaveTypeId;
                oData.IsPlanned = obj.IsPlanned;
                oData.IsBillable = obj.IsBillable;
                oData.IsApproved = obj.IsApproved;
                oData.Approvedby = obj.Approvedby;
                oData.ApprovedOn = obj.ApprovedOn;
                oData.Reason = obj.Reason;
                oData.Status = obj.Status;


                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.VacationDetails.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteVacationDetails(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.VacationDetails.First(i => i.ResourceDetailId == id);
                objEF.VacationDetails.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<VacationDetailsBO> GetAllVacationDetails()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from obj in objEF.VacationDetails
                        select new VacationDetailsBO
                        {
                            ResourceDetailId = obj.ResourceDetailId,
                            VacationDate = obj.VacationDate,
                            LeaveTypeId = obj.LeaveTypeId,
                            IsPlanned = obj.IsPlanned,
                            IsBillable = obj.IsBillable,
                            IsApproved = obj.IsApproved,
                            Approvedby = obj.Approvedby,
                            ApprovedOn = obj.ApprovedOn,
                            Reason = obj.Reason,
                            Status = obj.Status,
                            CreatedBy = obj.CreatedBy,
                            ModifiedBy = obj.ModifiedBy,
                            ModifiedDate = obj.ModifiedDate,
                            CreatedDate = obj.CreatedDate
                        }).ToList();
            }
        }

        public VacationDetailsBO GetVacationDetailsById(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from obj in objEF.VacationDetails
                        where obj.VacationDetailId == id
                        select new VacationDetailsBO
                        {
                            ResourceDetailId = obj.ResourceDetailId,
                            VacationDate = obj.VacationDate,
                            LeaveTypeId = obj.LeaveTypeId,
                            IsPlanned = obj.IsPlanned,
                            IsBillable = obj.IsBillable,
                            IsApproved = obj.IsApproved,
                            Approvedby = obj.Approvedby,
                            ApprovedOn = obj.ApprovedOn,
                            Reason = obj.Reason,
                            Status = obj.Status,
                            CreatedBy = obj.CreatedBy,
                            ModifiedBy = obj.ModifiedBy,
                            ModifiedDate = obj.ModifiedDate,
                            CreatedDate = obj.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdateVacationDetails(VacationDetailsBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.VacationDetails.First(i => i.VacationDetailId == obj.VacationDetailId);

                oData.ResourceDetailId = obj.ResourceDetailId;
                oData.VacationDate = obj.VacationDate;
                oData.LeaveTypeId = obj.LeaveTypeId;
                oData.IsPlanned = obj.IsPlanned;
                oData.IsBillable = obj.IsBillable;
                oData.IsApproved = obj.IsApproved;
                oData.Approvedby = obj.Approvedby;
                oData.ApprovedOn = obj.ApprovedOn;
                oData.Reason = obj.Reason;
                oData.Status = obj.Status;

                return objEF.SaveChanges();
            }
        }
    }
}
