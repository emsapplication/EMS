using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface IVacationDetailsBL
    {

        int AddVacationDetails(VacationDetailsBO obj);

        int UpdateVacationDetails(VacationDetailsBO obj);

        int DeleteVacationDetails(int id);

        List<VacationDetailsBO> GetAllVacationDetails();

        VacationDetailsBO GetVacationDetailsById(int id);
    }
}
