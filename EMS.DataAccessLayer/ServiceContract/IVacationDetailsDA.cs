using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface IVacationDetailsDA
    {

        int AddVacationDetails(VacationDetailsBO obj);

        int UpdateVacationDetails(VacationDetailsBO obj);

        int DeleteVacationDetails(int id);

        List<VacationDetailsBO> GetAllVacationDetails();

        VacationDetailsBO GetVacationDetailsById(int id);
    }
}
