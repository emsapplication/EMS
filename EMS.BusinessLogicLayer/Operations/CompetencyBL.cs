using EMS.DataAccessLayer.ServiceContract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EMS.BusinessObjects;
using EMSEntity = EMS.DataAccessLayer.DataEntityModel;
using EMS.BusinessLogicLayer.ServiceContract;
using EMS.DataAccessLayer.Operations;

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
            throw new NotImplementedException();
        }

        public int DeleteCompetency(int id)
        {
            throw new NotImplementedException();
        }

        public List<CompetencyBO> GetAllCompetency()
        {
            throw new NotImplementedException();
        }

        public CompetencyBO GetCompetencyById(int id)
        {
            throw new NotImplementedException();
        }

        public int UpdateCompetency(CompetencyBO obj)
        {
            throw new NotImplementedException();
        }
    }
}
