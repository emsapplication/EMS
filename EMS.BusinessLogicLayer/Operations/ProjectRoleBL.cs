using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.Operations
{
    public class ProjectRoleBL : IProjectRoleBL
    {

        IProjectRoleDA oProjectRole;
        public ProjectRoleBL()
        {
            oProjectRole = new ProjectRoleDA();
        }

        public int AddProjectRole(ProjectRoleBO obj)
        {
            return oProjectRole.AddProjectRole(obj);
        }

        public int DeleteProjectRole(int id)
        {
            return oProjectRole.DeleteProjectRole(id);
        }

        public List<ProjectRoleBO> GetAllProjectRole()
        {
            return oProjectRole.GetAllProjectRole();
        }

        public ProjectRoleBO GetProjectRoleById(int id)
        {
            return oProjectRole.GetProjectRoleById(id);
        }

        public int UpdatProjectRole(ProjectRoleBO obj)
        {
            return oProjectRole.UpdatProjectRole(obj);
        }
    }
}
