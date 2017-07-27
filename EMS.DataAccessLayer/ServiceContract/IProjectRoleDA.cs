using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface IProjectRoleDA
    {

        int AddProjectRole(ProjectRoleBO obj);

        int UpdatProjectRole(ProjectRoleBO obj);

        int DeleteProjectRole(int id);

        List<ProjectRoleBO> GetAllProjectRole();

        ProjectRoleBO GetProjectRoleById(int id);
    }
}
