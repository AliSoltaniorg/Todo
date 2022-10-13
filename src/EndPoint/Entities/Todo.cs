using EndPoint.Entities.Common;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace EndPoint.Entities
{
    public class Todo : AuditableEntity, IEntity
    {
        [Required]
        [MinLength(3)]
        public string Title { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        [Display(Name = "Due Date")]
        public DateTime DueDate { get; set; }

        [Display(Name = "Reminder Date")]
        public DateTime ReminderDate { get; set; }

        [Display(Name = "Is Done")]
        public bool IsDone { get; set; }

        [Display(Name = "Amount Time")]
        public string AmountTime { get; set; } = "00:00:00";

        [Display(Name = "Remaining Time")]
        public string RemainingTime { get; set; } = "00:00:00";
    }
}
