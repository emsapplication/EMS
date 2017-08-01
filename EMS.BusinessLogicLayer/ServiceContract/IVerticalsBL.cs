using EMS.BusinessObjects;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.ServiceContract
{
    public interface IVerticalsBL
    {

        int AddVerticals(VerticalsBO obj);

        int UpdateVerticals(VerticalsBO obj);

        int DeleteVerticals(int id);

        List<VerticalsBO> GetAllVerticals();

        VerticalsBO GetVerticalsById(int id);
    }
}
