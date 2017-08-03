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
    public class ProjectRoleDA : IProjectRoleDA
    {
        public int AddProjectRole(ProjectRoleBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                EMSEntity.ProjectRole oData = new EMSEntity.ProjectRole();
                oData.ProjectRole1 = obj.ProjectRole;
                oData.CreatedBy = obj.CreatedBy;
                oData.CreatedDate = DateTime.Now;

                objEF.ProjectRoles.Add(oData);

                return objEF.SaveChanges();
            }
        }

        public int DeleteProjectRole(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oSelect = objEF.ProjectRoles.First(i => i.ProjectRoleId == id);
                objEF.ProjectRoles.Remove(oSelect);

                return objEF.SaveChanges();
            }
        }

        public List<ProjectRoleBO> GetAllProjectRole()
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.ProjectRoles
                        select new ProjectRoleBO
                        {
                            ProjectRoleId = oLoc.ProjectRoleId,
                            ProjectRole = oLoc.ProjectRole1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList();
            }
        }

        public ProjectRoleBO GetProjectRoleById(int id)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                return (from oLoc in objEF.ProjectRoles
                        where oLoc.ProjectRoleId == id
                        select new ProjectRoleBO
                        {
                            ProjectRoleId = oLoc.ProjectRoleId,
                            ProjectRole = oLoc.ProjectRole1,
                            CreatedBy = oLoc.CreatedBy,
                            CreatedDate = oLoc.CreatedDate
                        }).ToList().FirstOrDefault();
            }
        }

        public int UpdatProjectRole(ProjectRoleBO obj)
        {
            using (EMSEntity.EMSEntities objEF = new EMSEntity.EMSEntities())
            {
                var oData = objEF.ProjectRoles.First(i => i.ProjectRoleId == obj.ProjectRoleId);

                oData.ProjectRole1 = obj.ProjectRole;

                return objEF.SaveChanges();
            }
        }
    }
}
