using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.Operations
{
    public class SubcompetencyBL : ISubcompetencyBL
    {

        ISubcompetencyDA oSubcompetency;
        public SubcompetencyBL()
        {
            oSubcompetency = new SubcompetencyDA();
        }

        public int AddSubcompetencyDetails(SubcompetencyBO obj)
        {
            return oSubcompetency.AddSubcompetencyDetails(obj);
        }

        public int DeleteSubcompetencyDetails(int id)
        {
            return oSubcompetency.DeleteSubcompetencyDetails(id);
        }

        public List<SubcompetencyBO> GetAllSubcompetencyDetails()
        {
            return oSubcompetency.GetAllSubcompetencyDetails();
        }

        public SubcompetencyBO GetSubcompetencyDetailsById(int id)
        {
            return oSubcompetency.GetSubcompetencyDetailsById(id);
        }

        public int UpdatSubcompetencyDetails(SubcompetencyBO obj)
        {
            return oSubcompetency.UpdatSubcompetencyDetails(obj);
        }
    }
}
