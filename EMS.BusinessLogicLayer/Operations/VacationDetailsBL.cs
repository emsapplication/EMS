using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.Operations
{
    public class VacationDetailsBL : IVacationDetailsBL
    {

        IVacationDetailsDA oVacationDetails;
        public VacationDetailsBL()
        {
            oVacationDetails = new VacationDetailsDA();
        }

        public int AddVacationDetails(VacationDetailsBO obj)
        {
            return oVacationDetails.AddVacationDetails(obj);
        }

        public int DeleteVacationDetails(int id)
        {
            return oVacationDetails.DeleteVacationDetails(id);
        }

        public List<VacationDetailsBO> GetAllVacationDetails()
        {
            return oVacationDetails.GetAllVacationDetails();
        }

        public VacationDetailsBO GetVacationDetailsById(int id)
        {
            return oVacationDetails.GetVacationDetailsById(id);

        }

        public int UpdateVacationDetails(VacationDetailsBO obj)
        {
            return oVacationDetails.UpdateVacationDetails(obj);
        }
    }
}
