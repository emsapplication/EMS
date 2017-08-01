using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface IProjectRoleBL
    {

        int AddProjectRole(ProjectRoleBO obj);

        int UpdatProjectRole(ProjectRoleBO obj);

        int DeleteProjectRole(int id);

        List<ProjectRoleBO> GetAllProjectRole();

        ProjectRoleBO GetProjectRoleById(int id);
    }
}
