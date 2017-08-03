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
    public class ShiftDetailDA : IShiftDetailDA
    {
        public int AddShiftDetail(ShiftDetailBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.ShiftDetail oData = new EMSEntity.ShiftDetail();
                oData.ShiftDetail1 = obj.ShiftDetail;
                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.ShiftDetails.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteShiftDetail(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.ShiftDetails.First(i => i.ShiftDetailId == id);
                objEF.ShiftDetails.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<ShiftDetailBO> GetAllShiftDetail()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.ShiftDetails
                        select new ShiftDetailBO
                        {
                            ShiftDetailId = oLoc.ShiftDetailId,
                            ShiftDetail = oLoc.ShiftDetail1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList();
            }
        }

        public ShiftDetailBO GetShiftDetailById(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.ShiftDetails
                        where oLoc.ShiftDetailId == id
                        select new ShiftDetailBO
                        {
                            ShiftDetailId = oLoc.ShiftDetailId,
                            ShiftDetail = oLoc.ShiftDetail1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdatShiftDetail(ShiftDetailBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.ShiftDetails.First(i => i.ShiftDetailId == obj.ShiftDetailId);

                oData.ShiftDetail1 = obj.ShiftDetail;
                return objEF.SaveChanges();
            }
        }
    }
}
