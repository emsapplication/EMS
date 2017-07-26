using EMS.BusinessObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMS.DataAccessLayer.ServiceContract
{
    public interface IDesignationDA
    {

        int AddDesignation(DesignationBO obj);

        int UpdateDesignation(DesignationBO obj);

        int DeleteDesignation(int leaveTypeid);

        List<DesignationBO> GetAllDesignation();

        DesignationBO GetDesignationById(int leaveTypeid);
    }
}
