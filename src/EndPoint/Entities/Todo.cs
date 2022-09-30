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

        [Display(Name = "Is Start")]
        public bool IsStart { get; set; }

        [Display(Name = "Is Resume")]
        public bool IsResume { get; set; }

        [Display(Name = "Is Stop")]
        public bool IsStop { get; set; }

        [Display(Name = "Amount Time")]
        public DateTime AmountTime { get; set; }

        [Display(Name = "Remaining Time")]
        public DateTime RemainingTime { get; set; }


    }
}
