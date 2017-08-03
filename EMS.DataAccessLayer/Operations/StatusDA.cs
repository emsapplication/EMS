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
    public class StatusDA : IStatusDA
    {
        public int AddStatus(StatusBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.Status oData = new EMSEntity.Status();
                oData.Status1 = obj.Status;
                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.Status.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteStatus(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.Status.First(i => i.StatusId == id);
                objEF.Status.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<StatusBO> GetAllStatus()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.Status
                        select new StatusBO
                        {
                            StatusId = oLoc.StatusId,
                            Status = oLoc.Status1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList();
            }
        }

        public StatusBO GetStatusById(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.Status
                        where oLoc.StatusId == id
                        select new StatusBO
                        {
                            StatusId = oLoc.StatusId,
                            Status = oLoc.Status1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdatStatus(StatusBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.Status.First(i => i.StatusId == obj.StatusId);

                oData.Status1 = obj.Status;
                return objEF.SaveChanges();
            }
        }
    }
}
