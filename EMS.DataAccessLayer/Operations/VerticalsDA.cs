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
    public class VerticalsDA : IVerticalsDA
    {
        public int AddVerticals(VerticalsBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.Vertical oData = new EMSEntity.Vertical();

                oData.VerticalName = obj.VerticalName;
                oData.VerticalHead = obj.VerticalHead;
                oData.StatusId = obj.StatusId;

                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.Verticals.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteVerticals(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.Verticals.First(i => i.VerticalId == id);
                objEF.Verticals.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<VerticalsBO> GetAllVerticals()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from obj in objEF.Verticals
                        select new VerticalsBO
                        {
                            VerticalName = obj.VerticalName,
                            VerticalHead = obj.VerticalHead,
                            StatusId = obj.StatusId,
                            CreatedBy = obj.CreatedBy,
                            CreatedDate = obj.CreatedDate
                        }).ToList();
            }
        }

        public VerticalsBO GetVerticalsById(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from obj in objEF.Verticals
                        where obj.VerticalId == id
                        select new VerticalsBO
                        {
                            VerticalName = obj.VerticalName,
                            VerticalHead = obj.VerticalHead,
                            StatusId = obj.StatusId,
                            CreatedBy = obj.CreatedBy,
                            CreatedDate = obj.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdateVerticals(VerticalsBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.Verticals.First(i => i.VerticalId == obj.VerticalId);

                oData.VerticalName = obj.VerticalName;
                oData.VerticalHead = obj.VerticalHead;
                oData.StatusId = obj.StatusId;

                return objEF.SaveChanges();
            }
        }
    }
}
