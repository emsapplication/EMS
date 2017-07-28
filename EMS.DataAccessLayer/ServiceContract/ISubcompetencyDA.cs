using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface ISubcompetencyDA
    {

        int AddSubcompetencyDetails(SubcompetencyBO obj);

        int UpdatSubcompetencyDetails(SubcompetencyBO obj);

        int DeleteSubcompetencyDetails(int id);

        List<SubcompetencyBO> GetAllSubcompetencyDetails();

        SubcompetencyBO GetSubcompetencyDetailsById(int id);
    }
}
