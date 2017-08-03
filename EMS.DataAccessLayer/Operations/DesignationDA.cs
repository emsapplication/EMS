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
    public class DesignationDA : IDesignationDA
    {
        public int AddDesignation(DesignationBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.Designation oData = new EMSEntity.Designation();
                oData.DesignationName = obj.DesignationName;
                oData.ShortDesignation = obj.ShortDesignation;
                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.Designations.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteDesignation(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.Designations.First(i => i.DesignationId == id);
                objEF.Designations.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<DesignationBO> GetAllDesignation()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.Designations
                        select new DesignationBO
                        {
                            DesignationId = oLoc.DesignationId,
                            DesignationName = oLoc.DesignationName,
                            ShortDesignation = oLoc.ShortDesignation,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList();
            }
        }

        public DesignationBO GetDesignationById(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.Designations
                        where oLoc.DesignationId == id
                        select new DesignationBO
                        {
                            DesignationId = oLoc.DesignationId,
                            DesignationName = oLoc.DesignationName,
                            ShortDesignation = oLoc.ShortDesignation,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdateDesignation(DesignationBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.Designations.First(i => i.DesignationId == obj.DesignationId);

                oData.DesignationName = obj.DesignationName;
                oData.ShortDesignation = obj.ShortDesignation;

                return objEF.SaveChanges();
            }
        }
    }
}
