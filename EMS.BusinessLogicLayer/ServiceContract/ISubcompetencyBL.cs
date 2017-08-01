using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface ISubcompetencyBL
    {

        int AddSubcompetencyDetails(SubcompetencyBO obj);

        int UpdatSubcompetencyDetails(SubcompetencyBO obj);

        int DeleteSubcompetencyDetails(int id);

        List<SubcompetencyBO> GetAllSubcompetencyDetails();

        SubcompetencyBO GetSubcompetencyDetailsById(int id);
    }
}
