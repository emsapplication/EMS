using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.Operations
{
    public class CompetencyBL : ICompetencyBL
    {

        ICompetencyDA oCompetency;
        public CompetencyBL()
        {
            oCompetency = new CompetencyDA();
        }


        public int AddCompetency(CompetencyBO obj)
        {
            return oCompetency.AddCompetency(obj);
        }

        public int DeleteCompetency(int id)
        {
            return oCompetency.DeleteCompetency(id);
        }

        public List<CompetencyBO> GetAllCompetency()
        {
            return oCompetency.GetAllCompetency();
        }

        public CompetencyBO GetCompetencyById(int id)
        {
            return oCompetency.GetCompetencyById(id);
        }

        public int UpdateCompetency(CompetencyBO obj)
        {
            return oCompetency.UpdateCompetency(obj);
        }
    }
}
