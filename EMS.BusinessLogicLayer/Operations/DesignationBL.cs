using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.Operations
{
    public class DesignationBL : IDesignationBL
    {

        IDesignationDA oDesignation;
        public DesignationBL()
        {
            oDesignation = new DesignationDA();
        }

        public int AddDesignation(DesignationBO obj)
        {
            return oDesignation.AddDesignation(obj);
        }

        public int DeleteDesignation(int id)
        {
            return oDesignation.DeleteDesignation(id);
        }

        public List<DesignationBO> GetAllDesignation()
        {
            return oDesignation.GetAllDesignation();
        }

        public DesignationBO GetDesignationById(int Id)
        {
            return oDesignation.GetDesignationById(Id);
        }

        public int UpdateDesignation(DesignationBO obj)
        {
            return oDesignation.UpdateDesignation(obj);

        }
    }
}
