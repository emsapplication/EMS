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
    public class ResourceDetailDA : IResourceDetailDA
    {
        public int AddResourceDetail(ResourceDetailBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.ResourceDetail oData = new EMSEntity.ResourceDetail();
                oData.PSAId = obj.PSAId;
                oData.ResourceName = obj.ResourceName;
                oData.CGIDateOfJoin = obj.CGIDateOfJoin;
                oData.CareerStartDate = obj.CareerStartDate;
                oData.LocationId = obj.LocationId;
                oData.SkillFamilyId = obj.SkillFamilyId;
                oData.CompentencyId = obj.CompentencyId;
                oData.SubcompetencyId = obj.SubcompetencyId;
                oData.StatusId = obj.StatusId;
                oData.ExtNumber = obj.ExtNumber;
                oData.DesignationId = obj.DesignationId;

                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.ResourceDetails.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteResourceDetail(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.ResourceDetails.First(i => i.ResourceDetailId == id);
                objEF.ResourceDetails.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<ResourceDetailBO> GetAllResourceDetail()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from obj in objEF.ResourceDetails
                        select new ResourceDetailBO
                        {
                            PSAId = obj.PSAId,
                            ResourceName = obj.ResourceName,
                            CGIDateOfJoin = obj.CGIDateOfJoin,
                            CareerStartDate = obj.CareerStartDate,
                            LocationId = obj.LocationId,
                            SkillFamilyId = obj.SkillFamilyId,
                            CompentencyId = obj.CompentencyId,
                            SubcompetencyId = obj.SubcompetencyId,
                            StatusId = obj.StatusId,
                            ExtNumber = obj.ExtNumber,
                            DesignationId = obj.DesignationId,
                            CreatedBy = obj.CreatedBy,
                            CreatedDate = obj.CreatedDate
                        }).ToList();
            }
        }

        public ResourceDetailBO GetResourceDetailById(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from obj in objEF.ResourceDetails
                        where obj.ResourceDetailId == id
                        select new ResourceDetailBO
                        {
                        PSAId = obj.PSAId,
                        ResourceName = obj.ResourceName,
                        CGIDateOfJoin = obj.CGIDateOfJoin,
                        CareerStartDate = obj.CareerStartDate,
                        LocationId = obj.LocationId,
                        SkillFamilyId = obj.SkillFamilyId,
                        CompentencyId = obj.CompentencyId,
                        SubcompetencyId = obj.SubcompetencyId,
                        StatusId = obj.StatusId,
                        ExtNumber = obj.ExtNumber,
                        DesignationId = obj.DesignationId,
                        CreatedBy = obj.CreatedBy,
                        CreatedDate = obj.CreatedDate

                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdatResourceDetail(ResourceDetailBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.ResourceDetails.First(i => i.ResourceDetailId == obj.ResourceDetailId);

                oData.PSAId = obj.PSAId;
                oData.ResourceName = obj.ResourceName;
                oData.CGIDateOfJoin = obj.CGIDateOfJoin;
                oData.CareerStartDate = obj.CareerStartDate;
                oData.LocationId = obj.LocationId;
                oData.SkillFamilyId = obj.SkillFamilyId;
                oData.CompentencyId = obj.CompentencyId;
                oData.SubcompetencyId = obj.SubcompetencyId;
                oData.StatusId = obj.StatusId;
                oData.ExtNumber = obj.ExtNumber;
                oData.DesignationId = obj.DesignationId;
                oData.ModifiedBy = obj.ModifiedBy;
                oData.ModifiedDate = DateTime.Now;

                return objEF.SaveChanges();
            }
        }

        public int ImportResourceDetail(ResourceDetailBO obj)
        {
            throw new NotImplementedException();
        }

        public List<ResourceDetailBO> SearchResourceDetail(ResourceDetailBO obj)
        {
            throw new NotImplementedException();
        }

       
    }
}
