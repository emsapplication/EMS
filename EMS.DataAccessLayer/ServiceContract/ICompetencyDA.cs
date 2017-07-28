using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface ICompetencyDA
    {

        int AddCompetency(CompetencyBO obj);

        int UpdateCompetency(CompetencyBO obj);

        int DeleteCompetency(int id);

        List<CompetencyBO> GetAllCompetency();

        CompetencyBO GetCompetencyById(int id);
    }
}
